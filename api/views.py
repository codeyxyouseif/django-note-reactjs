from ast import Delete
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
# Create your views here.

@api_view(['GET','POST'])
def getRoutes(request):

    routes = [
        {
            "Endpoint": "/notes/",
            "method": "GET",
            "bodey": None,
            "description": "Returns an arry fuccckk",
        },
        {
            "Endpoint": "/notes/id",
            "method": "GET",
            "bodey": None,
            "description": "Returns an arry fuccckk",
        },
        {
            "Endpoint": "/notes/create",
            "method": "POST",
            "bodey": {'body':""},
            "description": "Returns an arry fuccckk",
        },
        {
            "Endpoint": "/notes/delet",
            "method": "DELET",
            "bodey": {'body':""},
            "description": "Returns an arry fuccckk",
        },
    ],

    return Response(routes)

@api_view(['GET','POST'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many= True)
    return Response(serializer.data)


@api_view(['GET','POST'])
def getNote(request, pk):
    param = request.GET.get('id')

    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many= False)
    return Response(serializer.data)



@api_view(['GET','POST'])
def createNote(request):
    data = request.data
    note = Note.objects.create(
        body = data['body']
    )
    serializer = NoteSerializer(note, many = False)
    return Response(serializer.data)



@api_view(['PUT','GET','POST'])
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance = note, data = data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE','PUT','GET','POST'])
def deleteNote(request, pk):
    note = Note.objects.get(id = pk)
    note.delete()
    return Response('note was deleted')