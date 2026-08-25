import Link from "next/link";
import "@/styles/system/not-found.scss";

export default function NotFound() {
  return (
    <main id="main-content" className="page not-found">
      <p className="eyebrow">404 / Not found</p>
      <h1 className="page-header__title">찾는 기록이 없습니다.</h1>
      <p>주소를 다시 확인하거나 프로젝트 목록으로 돌아가 다른 작업을 살펴보세요.</p>
      <Link className="button button--signal" href="/projects">
        프로젝트 목록 보기 <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
