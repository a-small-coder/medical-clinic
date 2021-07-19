from django.db import models

# Create your models here.


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
