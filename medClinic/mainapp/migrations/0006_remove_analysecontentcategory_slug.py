# Generated by Django 3.2.5 on 2021-07-20 09:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0005_auto_20210720_1206'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='analysecontentcategory',
            name='slug',
        ),
    ]
