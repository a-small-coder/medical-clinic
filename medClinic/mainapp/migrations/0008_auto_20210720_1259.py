# Generated by Django 3.2.5 on 2021-07-20 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0007_auto_20210720_1256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='analyze',
            name='slug',
            field=models.SlugField(unique=True),
        ),
        migrations.AlterField(
            model_name='analyzecomplex',
            name='slug',
            field=models.SlugField(unique=True),
        ),
    ]
