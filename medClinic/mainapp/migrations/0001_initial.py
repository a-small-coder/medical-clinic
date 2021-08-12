# Generated by Django 3.2.5 on 2021-07-19 15:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NavigationCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Имя категории')),
                ('slug', models.SlugField(unique=True)),
                ('link', models.CharField(max_length=50, verbose_name='Ссылка категории')),
            ],
        ),
        migrations.CreateModel(
            name='SubNavigationCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Имя подкатегории')),
                ('slug', models.SlugField(unique=True)),
                ('link', models.CharField(max_length=50, verbose_name='Ссылка подкатегории')),
                ('navigation_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.navigationcategory', verbose_name='Имя категории')),
            ],
        ),
    ]
