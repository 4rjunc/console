# Generated by Django 4.2.3 on 2023-08-04 09:54

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_remove_secretevent_timestamp'),
    ]

    operations = [
        migrations.AddField(
            model_name='secretevent',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]