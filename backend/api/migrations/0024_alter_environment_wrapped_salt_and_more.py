# Generated by Django 4.2.3 on 2023-08-12 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_environment_identity_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='environment',
            name='wrapped_salt',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='environment',
            name='wrapped_seed',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='environmentkey',
            name='wrapped_salt',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='environmentkey',
            name='wrapped_seed',
            field=models.CharField(max_length=256),
        ),
    ]