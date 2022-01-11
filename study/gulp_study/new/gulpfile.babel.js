//gulpfile.babel.js 에 .babel이 적히는 이유는 아래와 같이 import ~ form 과 같은 최신 자바스크립트 언어를 이해하게하기 위함
// babel 은 기존 자바스크립트언어와 최신 언어를 서로 바꿔주는 역할을 하는 것으로 gulpfile.js에 위와 같이 적어주고
//같은 디렉토리상에 .babelrc 라는 파일을 만들어서 컴파일하는 작업이 필요함


import gulp from "gulp";
//걸프를 쓰기위한 클라이언트를 올리는 과정 
import gpug from "gulp-pug";
//걸프 퍼그의 html 로 컴파일 하는 플러그인
import del from "del";
//충돌을 막기 위해 작업 전에 기존 파일을 삭제하는 플러그인 
import ws from "gulp-webserver";

import image from "gulp-image";
//이미지 자동 컴파일

const sass = require('gulp-sass')(require('node-sass'));
//gulp-sass 는 node-sass로 컴파일하는 과정이 필요한데 위와 같은 식으로 적어줘야 작동함


const routes = {
    pug: {
        watch: "src/**/*.pug",
        src: "src/*.pug",
        dest: "build"
    },
    img: {
        src: "src/img/*",
        dest: "build/img"
    },
    scss: {
        watch: "src/scss/**/*.scss",
        src: "src/scss/styles.scss",
        dest: "build/css"
    }
};
//경로를 정해주는 메서드
//src안에 *.pug 라는 파일이 변환되면 그것에 대해서 새로고침할 예정이야 
//index.pug 만 컴파일 하겠다는 뜻으로 위에 있는 것만 하기로 했음
//목적지 dest 는 build 라는 새로운 폴더에 만들거임
//img 파일의 무엇도 또한 변환할 예정
// scss 파일을 build/css 폴더에 css로 변환해서 이동할 예정


const pug = () =>
    gulp
        .src(routes.pug.src)
        .pipe(gpug())
        .pipe(gulp.dest(routes.pug.dest));
//pug 를 실행했을 때 실행되는 일들 
//gulp.src(routes.pug.src) src/.pug에 있는 퍼그파일을 불러오기
//pipe(pug()) gulp-pug 를 실행하여 html로 컴파일하기
//pipe(gulp.dest()); destination 목적지 컴파일된 퍼그 파일을 어디에 저장할 것인지 적기

const clean = () => del(["build"]);
// 새로 빌드된 파일과 충돌을 일으킬 수 있기 때문에 del 플러그인 이용 기존의 build에 위치한 파일을 삭제하는 작업 
// clean 을 export 하지 않으면 콘솔이나 package.json 에서 사용하지 못함

const webserver = () => gulp.src("build").pipe(ws({livereload: true, open: true}));
//웹서버에 자동으로 열리도록 만드는 파이프

const watch = () => {
    gulp.watch(routes.pug.watch, pug);
    // gulp.watch(routes.img.src, img);
    gulp.watch(routes.scss.watch, styles);
}
//파일에 변화가 있을 떄 변환할 수 있도록 감시하는 역할


const img = () => gulp.src(routes.img.src).pipe(image()).pipe(gulp.dest(routes.img.dest));
//위치의 이미지를 불러와서 자동으로 새로운 위치에 저장하는 과정

const styles = () =>
    gulp
        .src(routes.scss.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(routes.scss.dest));
//scss의 위치확인 > 에러가 있을 경우 알려주는 파이프 > 결과물 저장 위치 경로 지정


const prepare = gulp.series([clean, img]);
//준비과정의 시리즈를 만들기 위해서 위와 같이 적어줌 
// 이미지를 매번 만들면 오래걸리기 때문에 초기 단계에서 만들 예정임 

const assets = gulp.series([pug, styles]);
//실제 컴파일되고 생성되는 과정의 시리즈


const postDev = gulp.parallel([webserver, watch]);
//라이브서버에 자동으로 올라가는 프로세스 만듦

export const dev = gulp.series([prepare, assets, postDev]);
// 함수 clean, pug 를 이어서 작업하는 dev 라는 함수를 만들었음
//export 라고 붙는 이유는 pakage.json에 스크립트로 gulp dev와 gulp build 를 적어뒀기 때문