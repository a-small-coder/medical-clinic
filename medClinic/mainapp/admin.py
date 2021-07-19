from django.contrib import admin

# Register your models here.
from .models import (
    NavigationCategory, SubNavigationCategory,
    ComplexType, AnalyzeComplex, GenderType,
    SearchGroup, Analyze, AnalyseContentCategory,
    AnalyzeContentBlock,
)

admin.site.register(NavigationCategory)
admin.site.register(SubNavigationCategory)
admin.site.register(ComplexType)
admin.site.register(AnalyzeComplex)
admin.site.register(GenderType)
admin.site.register(SearchGroup)
admin.site.register(Analyze)
admin.site.register(AnalyseContentCategory)
admin.site.register(AnalyzeContentBlock)
