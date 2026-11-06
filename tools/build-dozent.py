import sys,base64,re
src,out=sys.argv[1],sys.argv[2];import os;root=sys.argv[3] if len(sys.argv)>3 else os.path.dirname(os.path.abspath(src))
s=open(src,encoding='utf-8').read()
assert s.count('<title>Lernlabor</title>')==1 and s.count('const DOZENT=false;')==1
s=s.replace('<title>Lernlabor</title>','<title>Dozent · Lernlabor</title>').replace('const DOZENT=false;','const DOZENT=true;')
def f(m):
    b=base64.b64encode(open(root+'/'+m.group(1),'rb').read()).decode();return 'src:url(data:font/woff2;base64,'+b+')'
s,n=re.subn(r'src:url\((fonts/[^)]+\.woff2)\)',f,s);assert n==3,n
open(out,'w',encoding='utf-8').write(s);print('ok',len(s))
