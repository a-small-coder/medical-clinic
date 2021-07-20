import json

from django.db import models
from django.contrib.auth import get_user_model
import random
# Create your models here.


User = get_user_model()

class NavigationCategory(models.Model):

    category = models.CharField(max_length=255, verbose_name='Имя категории')
    slug = models.SlugField(unique=True)
    link = models.CharField(max_length=50, verbose_name='Ссылка категории')

    def __str__(self):
        return self.category


class SubNavigationQuerySet(models.QuerySet):

    def find_by_name_in_qs(self, name):
        return self.filter(category__icontains=name)


class SubNavigationManager(models.Manager):

    def get_queryset(self):
        return SubNavigationQuerySet(self.model, using=self._db)

    def find_by_name_in_qs(self, name):
        return self.get_queryset().find_by_name_in_qs(name)


class SubNavigationCategory(models.Model):

    navigation_category = models.ForeignKey(NavigationCategory, verbose_name='Имя категории', on_delete=models.CASCADE)
    sub_category = models.CharField(max_length=255, verbose_name='Имя подкатегории')
    slug = models.SlugField(unique=True)
    link = models.CharField(max_length=50, verbose_name='Ссылка подкатегории')

    def __str__(self):
        return self.sub_category


class ComplexType(models.Model):

    complex_type = models.CharField(max_length=255, verbose_name="Тип комплекса")
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.complex_type

    @property
    def products(self):
        return json.dumps((SearchGroup.objects.filter(complex_type=self).values()))


class GenderType(models.Model):
    gender = models.CharField(max_length=31, verbose_name="Гендер")
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.gender


class AnalyzeComplex(models.Model):

    complex_type = models.ForeignKey(ComplexType, verbose_name="Тип комплекса", on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name="Название")
    title_min = models.CharField(max_length=40, verbose_name="Нороткое название")
    price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name="Цена комплекса")
    gender = models.ForeignKey(GenderType, verbose_name="Зависит от гендера", on_delete=models.CASCADE)
    is_popular = models.BooleanField(default=False, verbose_name="Популярный товар")
    description = models.TextField(verbose_name='Описание', default="Описание появится позже")
    big_image = models.ImageField(verbose_name='Изображение для главного слайдера главной странице', null=True, blank=True)
    small_image = models.ImageField(verbose_name='Изображение для слайдера комплексов на главной странице', null=True, blank=True)
    in_top_five_list = models.BooleanField(
        default=False, verbose_name='Входит в Топ-5 косплексов (добавить на слайдер компексов)'
    )
    on_main_page = models.BooleanField(default=False, verbose_name='Добавить на главный слайдер')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return f"{self.id} | {self.complex_type} | {self.title_min}"

    def save(self, *args, **kwargs):
        if self.id:
            print(Analyze.objects.filter(complex=self))
            self.price = sum([cproduct.price for cproduct in Analyze.objects.filter(complex=self)])
        super().save(*args, **kwargs)



class SearchGroup(models.Model):
    title = models.CharField(max_length=255, verbose_name='Группа исследований')
    slug = models.SlugField(unique=True)
    complex_type = models.ForeignKey(
        ComplexType, verbose_name='Основной тип комплексов анализов', on_delete=models.CASCADE, null=True, blank=True
    )

    def __str__(self):
        return f"{self.title} ({self.complex_type})"




class Analyze(models.Model):

    complex = models.ForeignKey(AnalyzeComplex, verbose_name="Тип комплекса", on_delete=models.CASCADE, null=True, blank=True)
    search_group = models.ForeignKey(SearchGroup, verbose_name='', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name="Название")
    title_min = models.CharField(max_length=40, verbose_name="Нороткое название")
    price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name="Цена комплекса")
    gender = models.ForeignKey(GenderType, verbose_name="Зависит от гендера", on_delete=models.CASCADE)
    description = models.TextField(
        verbose_name='Описание для стартовой страницы (100-350 символов)', default='Описание появится позже'
    )
    time = models.CharField(max_length=31, verbose_name='Срок исполнения')
    is_popular = models.BooleanField(default=False, verbose_name="Популярный товар")
    small_image = models.ImageField(verbose_name='Изображение для уникальных анализов на главной странице', null=True, blank=True)
    vendor_code = models.CharField(verbose_name='Артикул', max_length=63)
    is_unic = models.BooleanField(default=False, verbose_name='Уникальный анализ')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return f"{self.title_min} ( {self.search_group})"


class CartAnalyze(models.Model):
    user = models.ForeignKey(
        'Customer', verbose_name='Покупатель', on_delete=models.CASCADE)
    cart = models.ForeignKey(
        'Cart', on_delete=models.CASCADE,
        verbose_name='Корзина', related_name='related_products')
    qty = models.PositiveIntegerField(default=1, verbose_name='Количество товара')
    analyze = models.ForeignKey(Analyze, verbose_name='Товар', on_delete=models.CASCADE)
    final_price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name='Общая цена')

    def __str__(self):
        return "Анализ: {} (для корзины)".format(self.analyze.tittle)

    def save(self, *args, **kwargs):
        self.final_price = self.qty * self.analyze.price
        super().save(*args, **kwargs)


class Cart(models.Model):

    owner = models.ForeignKey(
        'Customer', null=True, verbose_name='Владелец', on_delete=models.CASCADE)
    products = models.ManyToManyField(CartAnalyze, blank=True, related_name='related_cart')
    total_products = models.PositiveIntegerField(default=0)
    final_price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name='Общая цена', default=0)
    in_order = models.BooleanField(default=False)
    for_anonymous_user = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)

    def save(self, *args, **kwargs):
        if self.id:
            self.total_products = self.products.count()
            self.final_price = sum([cproduct.final_price for cproduct in self.products.all()])
        super().save(*args, **kwargs)


class Customer(models.Model):

    user = models.OneToOneField(User, verbose_name='Пользователь', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, verbose_name='Номер', null=True, blank=True)
    address = models.CharField(max_length=255, verbose_name='Адрес', null=True, blank=True)

    def __str__(self):
        if not (self.user.first_name and self.user.last_name):
            return self.user.username
        return "Покупатель {} {}".format(self.user.first_name, self.user.last_name)


class AnalyseContentCategory(models.Model):

    title = models.CharField(verbose_name='Заголовок категории', max_length=127)
    analyze = models.ForeignKey(Analyze, on_delete=models.CASCADE, verbose_name='Анализ')

    def __str__(self):
        return f"{self.title} для {self.analyze}"


class AnalyzeContentBlock(models.Model):

    title = models.CharField(max_length=255, verbose_name='Заголовок блока')
    analyze_content_category = models.ForeignKey(
        AnalyseContentCategory, on_delete=models.CASCADE, verbose_name='Категория блока'
    )
    analyze = models.ForeignKey(Analyze, on_delete=models.CASCADE, verbose_name='Для анализа:')
    text = models.TextField(verbose_name='Текст блока')
    pos = models.IntegerField(verbose_name='Позиция вывода на странице (от 1 до 10)')

    def __str__(self):
        return f"{self.analyze_content_category}"
