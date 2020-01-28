"""mesproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,re_path
from mes import views
from django.urls import path, include
from mes.views import  current_user, UserList,CustomJWTSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('^api/current_user/$', views.current_user),
    re_path('^api/register/$', UserList.as_view()),
    re_path('^api/delete/(\d+)$', UserList.as_view()),
    re_path('^api/departments/$', views.departments),
    re_path('^api/all/departments/$', views.all_departments),
    re_path('^api/add/department/$', views.add_departments),
    re_path('^api/competency-results/$', views.competency_results),
    re_path('^api/moringa-staff/$', views.moringa_staff),
    re_path('^api/token_auth/$',TokenObtainPairView.as_view(serializer_class=CustomJWTSerializer)),
    re_path('^api/refresh_token/$', TokenRefreshView.as_view()),
    re_path('^api/post/results/$',views.CompetencyResultsPost.as_view()),
    re_path('^api/post/manager/results/$',views.ManagerCompetencyResultsPost.as_view()),
    re_path('^api/final/results/$',views.finalResults),
    re_path('^api/dept_names/$',views.dept_names),
    re_path('^api/profile_pic/$',views.profile_pic),
    re_path('^api/password/change/$',views.change_password),
]
if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
