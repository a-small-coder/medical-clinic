# Generated by Django 3.2.5 on 2021-07-24 15:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0016_auto_20210724_1831'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='cart',
            unique_together=set(),
        ),
        migrations.RemoveField(
            model_name='cart',
            name='session_key',
        ),
    ]
