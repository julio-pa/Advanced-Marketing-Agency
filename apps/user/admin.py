from django.contrib import admin
from . import models
# Register your models here.


@admin.register(models.UserAccount)
class UserAdmin(admin.ModelAdmin):
    list_display: ('firs_name', 'last_name', 'email', 'is_staff', 'is_editor')
    search_fields: ('firs_name', 'last_name',
                    'email', 'is_staff', 'is_editor',)
