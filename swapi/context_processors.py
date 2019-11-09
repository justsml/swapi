import os 

def export_vars(request):
    data = {}
    data['BASE_URL'] = os.environ.get('BASE_URL', 'https://swapi.co')
    return data

def absolute_root_url(request):
    # urls = {
    #     'currentUrl': request.build_absolute_uri(),
    #     'ABSOLUTE_ROOT': request.build_absolute_uri('/')[:-1].strip("/"),
    #     'ABSOLUTE_ROOT_URL': request.build_absolute_uri('/').strip("/"),
    # }
    return request.build_absolute_uri('/')[:-1].strip("/")