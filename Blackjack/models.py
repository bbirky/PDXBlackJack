from django.db import models
from django.urls import reverse

class Session(models.Model):
    win = models.IntegerField(null=True)
    losses = models.IntegerField(null=True)
    win_streak = models.IntegerField(null=True)
    player = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE)


    def __str__(self):
        return f'{self.player} '


    def get_absolute_url(self):
        return reverse('users:myhome', args=(self.pk,))