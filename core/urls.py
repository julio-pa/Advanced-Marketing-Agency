from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
# from djoser.url.jwt import url

urlpatterns = [
    path(r'^auth/', include('djoser.urls')),
    path(r'^auth/', include('djoser.urls.jwt')),
    path(r'^auth/', include('djoser.social.urls')),
    path('api/blog/', include('apps.blog.urls')),
    path('api/category/', include('apps.category.urls')),

    path('ckeditor/', include('ckeditor_uploader.urls')),

    path('admin/', admin.site.urls),
    re_path(
        r"^.*$", TemplateView.as_view(template_name='base.html'),)
]
