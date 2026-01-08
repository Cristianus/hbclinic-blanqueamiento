import { Check, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const benefits = [
	{ text: "Evaluación personalizada preventiva", value: "$15.000" },
	{ text: "Limpieza dental profunda (eliminación de sarro)", value: "$55.000" },
	{ text: "Profilaxis profesional (eliminación de manchas)", value: "$25.000" },
	{ text: "Blanqueamiento profesional protocolo Blanco HB®", value: "$150.000" },
	{ text: "Aplicación de flúor (protección del esmalte)", value: "$49.990" },
	{ text: "Control post tratamiento", value: "$15.000" },
	{ text: "Kit de cuidado dental en casa", value: "$6.000" },
];

const ImplantPackSection = () => {
	const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

	useEffect(() => {
		if (timeLeft <= 0) return;

		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft]);

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	return (
		<section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-2xl mx-auto">
					<div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-primary/20 shadow-2xl overflow-hidden">
						{/* Header */}
						<div className="bg-gradient-to-r from-primary to-accent p-6 md:p-8 text-center">
							<span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium font-body mb-3">
								Cupos limitados
							</span>
							<h2 className="text-2xl md:text-4xl font-display font-bold text-white">
								Pack Blanqueamiento Premium Blanco HB®
							</h2>
							<p className="bg-white/90 text-primary font-bold text-base md:text-lg font-body mt-2 text-center rounded-xl px-4 py-2 shadow-md">
								<strong>No es solo un blanqueamiento, es tu control dental completo + un blanqueamiento.</strong>
							</p>
						</div>

						{/* Countdown Timer */}
						<div className="bg-destructive/10 border-b border-destructive/20 p-4">
							<div className="flex items-center justify-center gap-3">
								<Clock className="w-5 h-5 text-destructive animate-pulse" />
								<span className="text-foreground font-body font-medium">
									Oferta expira en:
								</span>
								<span className="text-2xl font-display font-bold text-destructive">
									{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
								</span>
							</div>
						</div>

						{/* Content */}
						<div className="p-6 md:p-10">
							{/* Pricing */}
							<div className="text-center mb-8">
								<p className="text-muted-foreground font-body text-lg mb-2">
									Precio lanzamiento:
								</p>
								<div className="flex items-center justify-center gap-4 flex-wrap">
									<span className="text-4xl md:text-5xl font-display font-bold text-primary">
										$159.990
									</span>
									<div className="flex flex-col items-start">
										<span className="text-sm text-muted-foreground/60 font-body">
											Valor referencial:
										</span>
										<span className="text-xl md:text-2xl font-body text-muted-foreground/60 line-through">
											$314.990
										</span>
									</div>
								</div>
							</div>

							{/* Reservation option */}
							<div className="bg-accent/10 rounded-xl p-4 mb-6 text-center border border-accent/30">
								<p className="text-foreground font-body font-medium mb-1 text-lg">
									<strong>💎 Si abonas una reserva de $10.000 pagas un total de solo $139.900 por el pack completo</strong>
									<span className="text-muted-foreground italic block mt-1">(esto lo hacemos para premiar el compromiso de asistencia a la consulta)</span>
								</p>
							</div>

							{/* Description */}
							<p className="text-center text-foreground font-body text-lg mb-4 font-semibold">
								¿Qué incluye este pack? (Stack de valor)
							</p>

							{/* Benefits list - Single column */}
							<div className="flex flex-col gap-3 mb-6">
								{benefits.map((benefit, index) => (
									<div
										key={index}
										className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
									>
										<div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
											<Check className="w-3 h-3 text-primary" />
										</div>
										<div className="flex flex-col">
											<span className="text-foreground font-body text-sm md:text-base">
												{benefit.text}
											</span>
											{benefit.value && (
												<span className="text-foreground font-body font-bold text-sm md:text-base mt-1">
													Valor referencial {benefit.value}
												</span>
											)}
										</div>
									</div>
								))}
							</div>

							{/* Total */}
							<div className="bg-muted/50 rounded-xl p-4 mb-6 text-center">
								<p className="text-muted-foreground font-body text-sm mb-1">
									Total por separado:
								</p>
								<p className="text-2xl font-display font-bold text-foreground line-through">
									$314.990
								</p>
							</div>

							{/* Guarantee section */}
							<div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-6 text-center border border-primary/30">
								<p className="text-foreground font-body font-bold mb-3 text-lg">
									👉 Garantía Blanco HB® (Única en el mercado)
								</p>
								<p className="text-foreground font-body">
									Si no alcanzas el blanco deseado, te regalamos una segunda sesión, sin preguntas.
								</p>
							</div>

							{/* Additional benefits */}
							<div className="bg-accent/5 rounded-xl p-6 mb-6 border border-accent/20">
								<p className="text-foreground font-body font-bold mb-3">
									Beneficios adicionales
								</p>
								<ul className="space-y-2">
									<li className="text-foreground font-body flex gap-2">
										<span className="text-green-600">✔</span>
										<span>10% de descuento si necesitas algún tratamiento previo al blanqueamiento</span>
									</li>
									<li className="text-foreground font-body flex gap-2">
										<span className="text-green-600">✔</span>
										<span>10% de descuento en otros tratamientos dentales</span>
									</li>
									<li className="text-foreground font-body flex gap-2">
										<span className="text-green-600">✔</span>
										<span>Protocolos seguros, atención profesional y cupos limitados <span className="font-bold text-destructive">— ¡solo 10 cupos cada mes!</span></span>
									</li>
									<li className="text-foreground font-body flex gap-2">
                    <span className="text-green-600">✔</span>
                    <span>Paga en cuotas con tarjeta de crédito</span>
                  </li>
                  <li className="text-foreground font-body flex gap-2">
                    <span className="text-green-600">✔</span>
                    <span>Reembolsa con cualquier seguro complementario</span>
                  </li>
								</ul>
							</div>

							{/* CTA Button */}
							<div className="text-center">
								<Button
									variant="cta"
									size="xl"
									className="w-full"
									onClick={() =>
										window.open(
											"https://wa.me/56996008545?text=Hola,%20me%20interesa%20el%20Pack%20Blanqueamiento%20Premium%20Blanco%20HB",
											"_blank"
										)
									}
								>
									Quiero mi Pack Blanqueamiento
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImplantPackSection;
