from rest_framework import serializers

from..models import NavigationCategory, SubNavigationCategory, Analyze, AnalyzeContentBlock, AnalyseContentCategory


class AnalyzeRetrieveSerializer(serializers.ModelSerializer):

    content = serializers.SerializerMethodField()

    class Meta:
        model = Analyze
        fields = ['id', 'title', 'title_min', 'price', 'time', 'is_popular', 'vendor_code', 'is_unic', 'content']

    @staticmethod
    def get_content(obj):
        return AnalyseContentCategorySerializer(AnalyseContentCategory.objects.filter(analyze=obj), many=True).data


class AnalyzeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Analyze
        fields = '__all__'


class AnalyseContentCategorySerializer(serializers.ModelSerializer):

    items = serializers.SerializerMethodField()

    class Meta:
        model = AnalyseContentCategory
        fields = ['title', 'items', 'slug']

    @staticmethod
    def get_items(obj):
        return AnalyzeContentBlockSerializer(AnalyzeContentBlock.objects.filter(analyze_content_category=obj), many=True).data


class AnalyzeContentBlockSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnalyzeContentBlock
        fields = ['title', 'text', 'pos']


class NavigationCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = NavigationCategory
        fields = '__all__'


class NavigationCategoryDetailSerializer(serializers.ModelSerializer):

    sub_categories = serializers.SerializerMethodField()
    spoilerActive = serializers.SerializerMethodField()

    class Meta:
        model = NavigationCategory
        fields = '__all__'

    @staticmethod
    def get_sub_categories(obj):
        return SubNavigationCategorySerializer(SubNavigationCategory.objects.filter(navigation_category=obj), many=True).data

    @staticmethod
    def get_spoilerActive(obj):
        return False


class SubNavigationCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = SubNavigationCategory
        fields = '__all__'


class SubNavigationCategoryRetrieveSerializer(serializers.ModelSerializer):

    navigation_category = NavigationCategorySerializer()

    class Meta:
        model = SubNavigationCategory
        fields = '__all__'

