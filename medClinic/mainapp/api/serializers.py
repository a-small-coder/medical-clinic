from rest_framework import serializers

from..models import (
    NavigationCategory, SubNavigationCategory,
    Analyze, AnalyzeContentBlock, AnalyseContentCategory,
    AnalyzeComplex, ComplexType,
    SearchGroup, GenderType
    )


class AnalyzeComplexSerializer(serializers.ModelSerializer):
    included_analyzes = serializers.SerializerMethodField()

    class Meta:
        model = AnalyzeComplex
        fields = '__all__'

    @staticmethod
    def get_included_analyzes(obj):
        return AnalyzeListSerializer(Analyze.objects.filter(complex=obj), many=True).data


class SearchGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = SearchGroup
        fields = '__all__'


class GenderTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = GenderType
        fields = ['id', 'slug']


class AnalyzeListSerializer(serializers.ModelSerializer):

    # complex = serializers.SerializerMethodField()
    # print(AnalyzeComplex.objects.filter(id=1))
    # gender = serializers.SerializerMethodField()
    # search_group = serializers.SerializerMethodField()

    class Meta:
        model = Analyze
        fields = '__all__'

    # @staticmethod
    # def get_complex(obj):
    #     return AnalyzeComplexSerializer(AnalyzeComplex.objects.filter(id=obj.id)).data
    #
    # @staticmethod
    # def get_gender(obj):
    #     return GenderTypeSerializer(GenderType.objects.filter(id=obj.id)).data
    #
    # @staticmethod
    # def get_search_group(obj):
    #     return SearchGroupSerializer(SearchGroup.objects.filter(id=obj.id)).data


class AnalyzeRetrieveSerializer(serializers.ModelSerializer):

    content = serializers.SerializerMethodField()

    class Meta:
        model = Analyze
        fields = ['id', 'title', 'title_min', 'price', 'time', 'is_popular', 'vendor_code', 'is_unic', 'content', 'complex']

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
        fields = ['title', 'items']

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

