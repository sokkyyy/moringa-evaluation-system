from mes.serializers.moringa_staff import UserSerializer


def my_jwt_response_handler(access, user=None, request=None):
    return {
        'access': access,
        'user': UserSerializer(user, context={'request': request}).data,
    }
