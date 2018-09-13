from django.shortcuts import render, redirect

lst = [
    {'addlist': '遛狗','finish':True},
    {'addlist': '遛狗','finish':True},
]


# Create your views here.
def home(request):
    if request.method == "POST":
        if request.POST["addlist"] == "":
            content = {'lst': lst, "warning": "输入内容不能为空！请输入内容！"}
            return render(request, "todolists/home.html", content)
        else:
            lst.append({'addlist': request.POST["addlist"],'finish':True})
            content = {'lst': lst,'news':'添加成功'}
            print(content)
            return render(request, "todolists/home.html", content)
    elif request.method == "GET":
        content = {'lst': lst}
        return render(request, "todolists/home.html", content)


def editor(request, forloop_counter):
    if request.method == "POST":
        if request.POST["listedit"] == "":
            content = {'lst': lst,'warning': '修改内容不能为空！请输入内容！'}
            return render(request, "todolists/edit.html",content )
        else:
            lst[int(forloop_counter) - 1]['addlist'] = request.POST["listedit"]
            return redirect("todolist:home")
    elif request.method == "GET":
        content = {'addlistname': lst[int(forloop_counter) - 1]['addlist']}
        return render(request, "todolists/edit.html", content)


def delete(request, forloop_counter):
    lst.pop(int(forloop_counter) - 1)
    return redirect("todolist:home")


def cross(request, forloop_counter):
    if request.POST["finished"]=="1":
        lst[int(forloop_counter) - 1]['finish'] = False
        return redirect("todolist:home")
    else:
        lst[int(forloop_counter) - 1]['finish'] = True
        return redirect("todolist:home")

