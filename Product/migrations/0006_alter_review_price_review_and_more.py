# Generated by Django 4.0.6 on 2022-09-04 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0005_remove_review_version_review_product_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='price_review',
            field=models.IntegerField(choices=[(1, '20'), (2, '40'), (3, '60'), (5, '100'), (4, '80')]),
        ),
        migrations.AlterField(
            model_name='review',
            name='quality_review',
            field=models.IntegerField(choices=[(1, '20'), (2, '40'), (3, '60'), (5, '100'), (4, '80')]),
        ),
        migrations.AlterField(
            model_name='review',
            name='value_review',
            field=models.IntegerField(choices=[(1, '20'), (2, '40'), (3, '60'), (5, '100'), (4, '80')]),
        ),
    ]