from django.urls import path
from rest_framework import routers
from .views import NavigationCategoryViewSet, SubNavigationCategoryViewSet, AnalyseViewSet, AnalyseContentCategoryViewSet, AnalyzeContentBlockViewSet

router = routers.SimpleRouter()
router.register('navigation', NavigationCategoryViewSet, basename='navigation')
router.register('subNavigation', SubNavigationCategoryViewSet, basename='subNavigation')
router.register('analyze', AnalyseViewSet, basename='analyze')
router.register('analyze-content-category', AnalyseContentCategoryViewSet, basename='analyze-content-category')

router.register('analyze-content-block', AnalyzeContentBlockViewSet, basename='analyze-content-block')

urlpatterns = []
urlpatterns += router.urls
