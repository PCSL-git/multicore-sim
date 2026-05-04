<div align="center">

<img src="assets/logo.png" alt="multicore_sim 로고" width="120" />

# multicore_sim

PLECS Codegen 시뮬레이션을 위한 멀티코어 시뮬레이터.

[**웹사이트**](https://pcsl-git.github.io/multicore-sim/) · [**다운로드**](https://github.com/PCSL-git/multicore-sim/releases/latest) · [English](README.md)

</div>

본 프로그램은 PLECS code-generated circuit을 desktop multicore를 이용해 offfline에서 시뮬레이션할 수 있는 프로그램입니다.
기존의 PLECS simulation program에서 싱글 코어 기반으로 동작하던 회로를 멀티 코어로 동작시켜 대규모 전력전자 회로의 모의 시간을 단축시키는 것이 주 목적입니다.

이 저장소는 Release build만 Hosting 하고 있습니다.
프로그램 구입 및 이용 문의는 아래 연락처로 연락주세요.  
최성휘 (Shenghui Cui) : cuish@snu.ac.kr  
박재연 (Jaeyeon Park) : ok6530@snu.ac.kr, jaeyeonparc@icloud.com


기능, 설치 방법, FAQ 는 [프로젝트 웹사이트](https://pcsl-git.github.io/multicore-sim/) 를 참고하세요.

> **참고** — multicore_sim 은 실시간 (real-time) 시뮬레이터가 *아닙니다*. 시뮬레이션 진행 속도는 모델과 호스트 성능에 따라 달라집니다.

## 다운로드

OS 에 맞는 인스톨러를 [Releases 페이지](https://github.com/PCSL-git/multicore-sim/releases/latest) 에서 받으세요.

| OS | 파일 |
| --- | --- |
| macOS (Apple Silicon / Intel) | `.dmg` |
| Windows 10 / 11 (x64) | `.exe` 인스톨러 |

호스트에 C 컴파일러 (`gcc`) 가 설치되어 있어야 합니다. 자세한 내용은 [웹사이트](https://pcsl-git.github.io/multicore-sim/#install) 참고하세요.

## 라이선스

© Jaeyeon Park / [Power Conversion Systems Laboratory](https://pcsl.snu.ac.kr). 모든 권리 보유. [LICENSE](LICENSE) 참고.




## 만든이

[박재연 (Jaeyeon Park)](https://jaeyeonpark.kr) · [github.com/jaeyeon302](https://github.com/jaeyeon302)

