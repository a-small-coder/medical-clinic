from rest_framework import serializers

from..models import (
    NavigationCategory, SubNavigationCategory,
    Analyze, AnalyzeContentBlock, AnalyseContentCategory,
    AnalyzeComplex, ComplexType,
    SearchGroup, GenderType,
    Cart, CartAnalyze, Customer
    )


class SearchGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = SearchGroup
        fields = '__all__'


class GenderTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = GenderType
        fields = ['id', 'slug']


class ComplexTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ComplexType
        fields = '__all__'


class AnalyzeComplexSerializer(serializers.ModelSerializer):
    included_analyzes = serializers.SerializerMethodField()
    gender = GenderTypeSerializer()
    complex_type = ComplexTypeSerializer()

    class Meta:
        model = AnalyzeComplex
        fields = '__all__'

    @staticmethod
    def get_included_analyzes(obj):
        return AnalyzeListSerializer(Analyze.objects.filter(complex=obj), many=True).data


class AnalyzeComplexForeignSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnalyzeComplex
        fields = '__all__'


class AnalyzeListSerializer(serializers.ModelSerializer):

    complex = AnalyzeComplexForeignSerializer()
    # print(AnalyzeComplex.objects.filter(id=1))
    gender = GenderTypeSerializer()
    search_group = SearchGroupSerializer()

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


class CartProductSerializer(serializers.ModelSerializer):

    analyze = AnalyzeSerializer()

    class Meta:
        model = CartAnalyze
        fields = ['id', 'product', 'qty', 'final_price']


class CustomerSerializer(serializers.ModelSerializer):

    user = serializers.SerializerMethodField()

    class Meta:
        model = Customer
        fields = '__all__'

    @staticmethod
    def get_user(obj):
        first_name, last_name = obj.user.first_name, obj.user.last_name
        if not (first_name and last_name):
            return obj.user.username
        return ' '.join([first_name, last_name])


class CartSerializer(serializers.ModelSerializer):

    products = CartProductSerializer(many=True)
    owner = CustomerSerializer()

    class Meta:
        model = Cart
        fields = '__all__'
