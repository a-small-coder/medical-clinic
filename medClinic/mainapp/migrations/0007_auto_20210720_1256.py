# Generated by Django 3.2.5 on 2021-07-20 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0006_remove_analysecontentcategory_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='analyze',
            name='slug',
            field=models.SlugField(default='1'),
        ),
        migrations.AddField(
            model_name='analyzecomplex',
            name='slug',
            field=models.SlugField(default='2'),
        ),
    ]
