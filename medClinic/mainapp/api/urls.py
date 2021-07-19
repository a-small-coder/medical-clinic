from django.urls import path
from rest_framework import routers
from .views import NavigationCategoryViewSet, SubNavigationCategoryViewSet

router = routers.SimpleRouter()
router.register('navigation', NavigationCategoryViewSet, basename='navigation')
router.register('subNavigation', SubNavigationCategoryViewSet, basename='subNavigation')

urlpatterns = []
urlpatterns += router.urls
