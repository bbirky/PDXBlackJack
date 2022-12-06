from django.db import models
from django.urls import reverse

class User(models.Model):
    win = models.IntegerField()
    win_streak = models.IntegerField()
    author = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title} - {self.body}'


    def get_absolute_url(self):
        return reverse('posts:home', args=(self.pk,))