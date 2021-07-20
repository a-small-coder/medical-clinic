from django.urls import path
from rest_framework import routers
from .views import (
    NavigationCategoryViewSet,
    SubNavigationCategoryViewSet,
    AnalyseViewSet,
    AnalyseContentCategoryViewSet,
    AnalyzeContentBlockViewSet,
    UnicAnalyseViewSet,
    ComplexAnalyzesViewSet,
    CartViewSet
    )

router = routers.SimpleRouter()
router.register('navigation', NavigationCategoryViewSet, basename='navigation')
router.register('subNavigation', SubNavigationCategoryViewSet, basename='subNavigation')
router.register('catalog/all-analyzes', AnalyseViewSet, basename='all-analyzes')
router.register('catalog/unic-analyzes', UnicAnalyseViewSet, basename='unic-analyzes')
router.register('catalog/complex-analyzes', ComplexAnalyzesViewSet, basename='all-analyzes')
router.register('analyzes', AnalyseViewSet, basename='all-analyzes')
router.register('analyze-content-category', AnalyseContentCategoryViewSet, basename='analyze-content-category')
router.register('cart', CartViewSet, basename='cart')
router.register('analyze-content-block', AnalyzeContentBlockViewSet, basename='analyze-content-block')

urlpatterns = []
urlpatterns += router.urls
