
### 환경 설정(Window10)
-----
##### 1. Scoop 설치
* Window PowerShell 관리자 권한으로 실행
* 다음을 입력
```
> Set-ExecutionPolicy RemoteSigned -scope CurrentUser
#'모두예(A)' 선택

> $env:SCOOP='c:\Scoop'
#환경변수 설정

>iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
#Scoop 설치
```
<br/><br/>

##### 2. Node.js 설치
PowerShell 에서 Scoop을 이용하여 node.js 설치
```
> scoop install nodejs-lts
> node -v
#설치가 완료되면 버전이 출력됨!

```
<br/><br/>
##### 3. JAVA SDK 설치
Android 개발용 JAVA SDK 설치

```
> scoop install git
> scoop bucket add java
> scoop instal adopt8-hospot
> java -version
#설치가 완료되면 버전이 출력됨!
```
<br/><br/>
##### + VSCode 설치 필요
이미 있어서 설치하지 않았지만 VSCode를 사용하였습니다.
```
>scoop bucket add extras
>scoop install vscode
#설치완료후 ~.reg 입력하라는 메시지가 뜨는데 그대로 입력해주면 됨
```
<br/><br/>

##### 4. Android Studio 설치
```
> scoop install android-studio android-sdk
```
안드로이드 SDK Manager>SDK Tools 탭 에서 Status가 업데이트 가능인 것을 모두 업데이트해줌
<br/><br/>

##### 5. touch 설치
```
>scoop install touch
```
<br/><br/>

##### 6. Typescript 설치
VSCode 터미널에서 typescript 컴파일러 설치
```
% npm i -g typescript ts-node
```



### Android Studio 설정

1. Android Studio 에서 Configure>AVD Manager>Create Virtual Device>Select HardWare>Phone 으로 들어감

2. Pixel 3a>x86 images Tab> API Level29, ABI x86_64, Android10.0(Google APIs) 다운로드

3. Graphics>Software-GLES2.0>Finish!

