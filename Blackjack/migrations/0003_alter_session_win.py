# Generated by Django 4.1.3 on 2022-12-09 03:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Blackjack', '0002_session_losses_alter_session_win_streak'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='win',
            field=models.IntegerField(null=True),
        ),
    ]
