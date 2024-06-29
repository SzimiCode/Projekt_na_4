from django.urls import path
from . import views

urlpatters = [
    path("register/", views.CreateUserView.as_view(), name="register"),
    path("event/", views.CallendarEventViewCreate.as_view(), name="event"),
    path("event_delate/<int:pk>/", views.CallendarEventViewDelate.as_view(), name="event"),
    path("experience/", views.ExperienceViewCreate.as_view(), name="experience"),
]
