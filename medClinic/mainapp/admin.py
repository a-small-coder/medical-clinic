from django.contrib import admin

# Register your models here.
from .models import NavigationCategory, SubNavigationCategory

admin.site.register(NavigationCategory)
admin.site.register(SubNavigationCategory)