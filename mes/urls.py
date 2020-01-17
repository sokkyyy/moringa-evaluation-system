from . import views
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^$', views.home,name='home'),
]

