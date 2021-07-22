from django.urls import path
from rest_framework import routers

from .AnalyzeView import AnalyseViewSet, UnicAnalyseViewSet, AnalyseContentCategoryViewSet, \
    AnalyzeContentBlockViewSet
from .AnalyzesComplexView import ComplexAnalyzesViewSet
from .CartView import CartViewSet
from .OtherViews import NavigationCategoryViewSet, SubNavigationCategoryViewSet

router = routers.SimpleRouter()
router.register('navigation', NavigationCategoryViewSet, basename='navigation')
router.register('subNavigation', SubNavigationCategoryViewSet, basename='subNavigation')
router.register('catalog/all-analyzes', AnalyseViewSet, basename='all-analyzes')
router.register('catalog/unic-analyzes', UnicAnalyseViewSet, basename='unic-analyzes')
router.register('catalog/complex-analyzes', ComplexAnalyzesViewSet, basename='all-analyzes')
router.register('analyze-content-category', AnalyseContentCategoryViewSet, basename='analyze-content-category')
router.register('analyze-content-block', AnalyzeContentBlockViewSet, basename='analyze-content-block')
router.register('cart', CartViewSet, basename='cart')

urlpatterns = []
urlpatterns += router.urls
