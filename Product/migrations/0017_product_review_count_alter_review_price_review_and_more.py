# Generated by Django 4.0.6 on 2022-09-11 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0016_alter_review_price_review_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='review_count',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='review',
            name='price_review',
            field=models.IntegerField(choices=[(4, '80'), (1, '20'), (3, '60'), (2, '40'), (5, '100')]),
        ),
        migrations.AlterField(
            model_name='review',
            name='quality_review',
            field=models.IntegerField(choices=[(4, '80'), (1, '20'), (3, '60'), (2, '40'), (5, '100')]),
        ),
        migrations.AlterField(
            model_name='review',
            name='value_review',
            field=models.IntegerField(choices=[(4, '80'), (1, '20'), (3, '60'), (2, '40'), (5, '100')]),
        ),
        migrations.DeleteModel(
            name='ProductStatistic',
        ),
    ]
