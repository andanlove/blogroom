from django.urls import path
from . import views

app_name="todolist"
urlpatterns = [
    path('', views.home,name="home"),
    path('editor/<forloop_counter>', views.editor,name="editor"),
    path('delete/<forloop_counter>', views.delete,name="delete"),
    path('cross/<forloop_counter>', views.cross,name="cross"),
]
