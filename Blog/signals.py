from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Blogs, Authors
from django.utils.text import slugify

@receiver(pre_save, sender=Blogs)
def slugify_blog_title(sender, instance, *args, **kwargs):
    instance.slug = slugify(instance.title)

@receiver(pre_save, sender=Authors)
def slugify_blog_title(sender, instance, *args, **kwargs):
    instance.author_slug = slugify(instance.author)