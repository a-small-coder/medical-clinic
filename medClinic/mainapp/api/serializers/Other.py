from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from ...models import (
    SearchGroup,
    ComplexType,
    AboutUsCategory,
    AboutUsContentBlock,
    OurAchievements
    )


class SearchGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = SearchGroup
        fields = '__all__'


class ComplexTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ComplexType
        fields = '__all__'


class AboutUsCategorySerializer(serializers.ModelSerializer):

    content_items = serializers.SerializerMethodField()

    class Meta:
        model = AboutUsCategory
        fields = '__all__'

    @staticmethod
    def get_content_items(obj):
        return AboutUsContentBlockSerializer(AboutUsContentBlock.objects.filter(category=obj), many=True).data


class AboutUsContentBlockSerializer(serializers.ModelSerializer):

    class Meta:
        model = AboutUsContentBlock
        fields = ['id', 'title', 'text']


class OurAchievementsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OurAchievements
        fields = ['id', 'title', 'text', 'icon']


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
