# Generated by Django 3.2.5 on 2021-07-20 21:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0011_auto_20210721_0036'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='analyzecomplex',
            name='analyzes',
        ),
    ]
