"use client";

import { useEffect, useRef } from "react";

/* -----------------------------------------
  StarryBackground
  背景の小さな星（点滅 / 出現）を生成
  5秒ごとに流れ星を1つ生成（表示時間 0.3s、フェードイン/フェードアウト）
----------------------------------------- */

export default function StarryBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 既存の要素をクリア
    container.innerHTML = "";

    // 背景の小さい星を生成
    const starCount = 140;
    for (let i = 0; i < starCount; i++) {
      const s = document.createElement("div");
      s.className = "star";
      const size = Math.random() * 2 + 0.6;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.left = `${Math.random() * 100}%`;
      // ランダムなアニメーション遅延（twinkle, appear）
      const delay1 = Math.random() * 2; // twinkle delay
      const delay2 = Math.random() * 12; // appear delay
      s.style.animationDelay = `${delay1}s, ${delay2}s`;
      container.appendChild(s);
    }

    // 流れ星の生成関数（1回あたり）
    const createShootingStar = () => {
      // 始点と終点をランダムに決める（画面内）
      // なるべく斜めに流れるようにランダム角度を偏らせる
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // ランダムに開始位置（x1,y1）を画面のどこかに取る
      // そして終点は開始点から斜め方向へ一定距離進める
      // テイスト：右上方向（-x +y negative) や左上方向などをランダムにする
      const margin = 0.05; // 画面端に寄せすぎない
      const x1 = Math.random() * (vw * (1 - margin * 2)) + vw * margin;
      const y1 = Math.random() * (vh * 0.6) + vh * 0.1; // 上寄りに出やすくする

      // 距離（px）をランダム化（短すぎず長すぎず）
      const distance = Math.random() * (vw * 0.4) + vw * 0.25; // 画面幅の 25%〜65%
      // 角度をランダムに（上向きが多い）
      const angleDeg = (Math.random() * 60 + 260) % 360; // 200〜320 deg(上向き斜め)
      const angleRad = (angleDeg * Math.PI) / 180;

      const x2 = x1 + Math.cos(angleRad) * distance;
      const y2 = y1 + Math.sin(angleRad) * distance;

      // 距離（線分の長さ）
      const len = Math.hypot(x2 - x1, y2 - y1);

      // DOM要素作成
      const el = document.createElement("div");
      el.className = "shooting-star";
      el.style.width = `${len}px`;
      el.style.top = `${y1}px`;
      el.style.left = `${x1}px`;

      // 計算した角度（deg）
      const deg = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

      // 初期 transform：回転のみ + translateX(0)
      el.style.transform = `rotate(${deg}deg) translateX(0px)`;
      el.style.opacity = "0";

      // append してレイアウトを確定（reflow）
      container.appendChild(el);

      // Force reflow to ensure the browser registers the initial state
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.getBoundingClientRect();

      // トリガー：フェードインしつつ translateX で線分上を移動
      // 全体表示時間は 0.3s（移動 + 表示）
      const duration = 300; // ms
      el.style.transition = `transform ${duration}ms linear, opacity ${Math.max(duration - 50, 150)}ms ease-in-out`;

      // set opacity to 1 and move to end (translateX by len)
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = `rotate(${deg}deg) translateX(${len}px)`;
      });

      // 0.3s 経過後フェードアウト（ここでは即座に opacity 0 にするため短いタイミング）
      // 要求：「流れ星は0.3秒表示」なので移動完了と同時にフェードアウト開始して要素を除去
      setTimeout(() => {
        // フェードアウト（0.15s）
        el.style.opacity = "0";
      }, duration);

      // remove after duration + small buffer
      setTimeout(() => {
        el.remove();
      }, duration + 200);
    };

    // 最初に一個流しておく（optional）
    // createShootingStar();

    // 3秒ごとに1つ生成
    const interval = setInterval(createShootingStar, 3000);

    // クリーンアップ
    return () => {
      clearInterval(interval);
      // remove added nodes
      container.querySelectorAll(".shooting-star, .star").forEach((n) => n.remove());
    };
  }, []);

  return <div ref={containerRef} className="starry-sky" />;
}
