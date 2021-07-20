# Generated by Django 3.2.5 on 2021-07-20 11:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0008_auto_20210720_1259'),
    ]

    operations = [
        migrations.AlterField(
            model_name='analyze',
            name='complex',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='mainapp.analyzecomplex', verbose_name='Тип комплекса'),
        ),
        migrations.AlterField(
            model_name='analyze',
            name='search_group',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='mainapp.searchgroup', verbose_name=''),
        ),
        migrations.AlterField(
            model_name='analyze',
            name='small_image',
            field=models.ImageField(blank=True, null=True, upload_to='', verbose_name='Изображение для уникальных анализов на главной странице'),
        ),
        migrations.AlterField(
            model_name='analyzecomplex',
            name='big_image',
            field=models.ImageField(blank=True, null=True, upload_to='', verbose_name='Изображение для главного слайдера главной странице'),
        ),
        migrations.AlterField(
            model_name='analyzecomplex',
            name='small_image',
            field=models.ImageField(blank=True, null=True, upload_to='', verbose_name='Изображение для слайдера комплексов на главной странице'),
        ),
        migrations.AlterField(
            model_name='searchgroup',
            name='complex_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='mainapp.complextype', verbose_name='Основной тип комплексов анализов'),
        ),
    ]
