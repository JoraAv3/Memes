// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { ArcElement, Legend, Tooltip } from "chart.js";

// Chart.register(ArcElement, Legend);
Chart.unregister(Tooltip);

export const SpaceNomics = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (chartRef.current === null) {
      return;
    }
    const ctx = chartRef.current.getContext("2d");

    const image1 = new Image();
    image1.src = "/images/spacenomics/development.png";

    const image2 = new Image();
    image2.src = "/images/spacenomics/team.png";

    const image3 = new Image();
    image3.src = "/images/spacenomics/marketing.png";

    const image4 = new Image();
    image4.src = "/images/spacenomics/liquidity.png";

    const image5 = new Image();
    image5.src = "/images/spacenomics/community.png";

    const image6 = new Image();
    image6.src = "/images/spacenomics/presale.png";

    const onImagesLoaded = () => {
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [
            "Presale: 30%",
            "Community /Ecosystem: 20%",
            "Liquidity: 10%",
            "Marketing: 20%",
            "Team: 10%",
            "Development: 10%",
          ],
          datasets: [
            {
              data: [30, 20, 10, 20, 10, 10],
              backgroundColor: [
                ctx.createPattern(image6, "repeat"),
                ctx.createPattern(image5, "repeat"),
                ctx.createPattern(image4, "repeat"),
                ctx.createPattern(image3, "repeat"),
                ctx.createPattern(image2, "repeat"),
                ctx.createPattern(image1, "repeat"),
              ],
              borderWidth: 8,
              borderRadius: 12,
              borderColor: "#00000056",
              hoverOffset: 10,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Отключаем автоматическое масштабирование
          layout: {
            padding: 65, // Отступы внутри графика
          },
          cutout: "5%",
          plugins: {
            legend: {
              display: false, // Скрываем стандартную легенду
            },
          },
          animation: {
            animateScale: true,
          },
        },
        plugins: [
          {
            id: "custom-labels",
            afterDraw(chart) {
              const { ctx, chartArea, data } = chart;
              const { width, height } = chartArea;
              const centerX = (chartArea.left + chartArea.right) / 2;
              const centerY = (chartArea.top + chartArea.bottom) / 2;
              const radius = Math.min(width, height) / 2;

              data.labels.forEach((label, i) => {
                const angle =
                  (chart.getDatasetMeta(0).data[i].startAngle +
                    chart.getDatasetMeta(0).data[i].endAngle) /
                  2;
                const x = centerX + Math.cos(angle) * (radius + 45);
                const y = centerY + Math.sin(angle) * (radius + 40);
                const labelParts = label.split(" ");
                const percent = labelParts.pop();

                ctx.save();
                ctx.font = "0.8em Finlandica";
                ctx.fillStyle = "#fff";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                for (let i = 0; i < labelParts.length; i++) {
                  const yCoord = i === 0 ? y - 12 : y + 12;
                  ctx.fillText(labelParts[i], x, yCoord);
                }
                ctx.font = "bold 0.8em Arial";
                ctx.fillStyle = "#FFA500";
                ctx.fillText(
                  percent,
                  x,
                  labelParts.length > 1 ? y + (labelParts.length + 1) * 12 : y + 12
                );
                ctx.restore();
              });
            },
          },
        ],
      });
    };

    const images = [image1, image2, image3, image4, image5, image6];
    const imagesLength = images.length;
    let loadedCount = 0;

    images.forEach((img) => {
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === imagesLength) {
          onImagesLoaded();
        }
      };
    });
  }, [chartRef.current]);

  return (
    <div className="w-[450px] xl:w-[600px] h-[450px] xl:h-[600px] m-auto">
      <canvas ref={chartRef} />
    </div>
  );
};
