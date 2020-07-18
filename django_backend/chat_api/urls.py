from django.urls import include, path
from rest_framework import routers
from . import views


urlpatterns = [
    # path('', include(router.urls)),
    path('items/', views.Items),
    path('items/<int:pk>/', views.ItemOne),
    path('customers/', views.Customers),
    path('items/<int:itemId>/enquire/<int:userId>', views.addToEnquires),
    path('login/', views.Login)
    # path('items/enquire/<int:itemId>/<int:userId>', views.addToEnquires),
    # path('users/', views.showAllUsers)
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
