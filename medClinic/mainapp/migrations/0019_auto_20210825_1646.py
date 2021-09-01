# Generated by Django 3.2.5 on 2021-08-25 13:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0018_auto_20210825_1645'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_products', models.PositiveIntegerField(default=0)),
                ('final_price', models.DecimalField(decimal_places=2, default=0, max_digits=9, verbose_name='Общая цена')),
                ('in_order', models.BooleanField(default=False)),
                ('for_anonymous_user', models.BooleanField(default=False)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='mainapp.customer', verbose_name='Владелец')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('title_min', models.CharField(max_length=40, verbose_name='Краткое название')),
                ('price', models.DecimalField(decimal_places=2, default=0.0, max_digits=9, verbose_name='Цена ')),
                ('preview_description', models.TextField(default='Описание появится позже', verbose_name='Краткое описание (до 100 знаков)')),
                ('slug', models.SlugField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Analyze',
            fields=[
                ('product_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='mainapp.product')),
                ('gender', models.CharField(choices=[('male', 'мужской'), ('female', 'женский'), ('any', 'любой')], default='any', max_length=7, verbose_name='Гендер ')),
                ('time', models.CharField(max_length=31, verbose_name='Срок исполнения')),
                ('is_popular', models.BooleanField(default=False, verbose_name='Популярный товар')),
                ('vendor_code', models.CharField(max_length=63, verbose_name='Артикул')),
                ('is_unic', models.BooleanField(default=False, verbose_name='Уникальный анализ')),
                ('small_image', models.ImageField(blank=True, null=True, upload_to='analyzes', verbose_name='Изображение для уникальных анализов на главной странице')),
            ],
            bases=('mainapp.product',),
        ),
        migrations.CreateModel(
            name='CartAnalyze',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qty', models.PositiveIntegerField(default=1, verbose_name='Количество товара')),
                ('final_price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Общая цена')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='related_products', to='mainapp.cart', verbose_name='Корзина')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.customer', verbose_name='Покупатель')),
                ('analyze', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.analyze', verbose_name='Товар')),
            ],
        ),
        migrations.AddField(
            model_name='cart',
            name='products',
            field=models.ManyToManyField(blank=True, related_name='related_cart', to='mainapp.CartAnalyze'),
        ),
        migrations.CreateModel(
            name='AnalyzeContentBlock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('analyze_content_category', models.CharField(choices=[('DS', 'Описание'), ('PR', 'Подготовка'), ('IU', 'Показания к применению'), ('FB', 'Интерпретация результатов')], default='DS', max_length=2, verbose_name='Категория блока')),
                ('title', models.CharField(max_length=255, verbose_name='Заголовок блока')),
                ('text', models.TextField(default='', verbose_name='Текст блока')),
                ('pos', models.PositiveIntegerField(default=1, verbose_name='Позиция вывода на странице (от 1 до 10)')),
                ('analyze', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.analyze', verbose_name='Для анализа')),
            ],
        ),
        migrations.CreateModel(
            name='AnalyzeComplex',
            fields=[
                ('product_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='mainapp.product')),
                ('gender', models.CharField(choices=[('male', 'мужской'), ('female', 'женский'), ('any', 'любой')], default='any', max_length=7, verbose_name='Гендер ')),
                ('is_popular', models.BooleanField(default=False, verbose_name='Популярный товар')),
                ('in_top_five_list', models.BooleanField(default=False, verbose_name='Входит в Топ-5 косплексов (добавить на слайдер компексов)')),
                ('on_main_page', models.BooleanField(default=False, verbose_name='Добавить на главный слайдер')),
                ('big_image', models.ImageField(blank=True, null=True, upload_to='complexes/main-slider', verbose_name='Изображение для главного слайдера главной странице')),
                ('small_image', models.ImageField(blank=True, null=True, upload_to='complexes/complex-slider', verbose_name='Изображение для слайдера комплексов на главной странице')),
                ('complex_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.complextype', verbose_name='Тип комплекса')),
            ],
            bases=('mainapp.product',),
        ),
        migrations.AddField(
            model_name='analyze',
            name='complex',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='mainapp.analyzecomplex', verbose_name='Входит в комплекс'),
        ),
        migrations.AddField(
            model_name='analyze',
            name='search_group',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='mainapp.searchgroup', verbose_name='В ходит в группу исследований'),
        ),
    ]
