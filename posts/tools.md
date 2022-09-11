---
title: Herramientas
description: Una recolección de las cosas físicas y virtuales que hacen a mi taller de trabajo, tanto en lo profesional como en lo personal.
---

# Hardware
## Multímetros
- Pinza amperométrica [Ut-202](https://www.mercadolibre.com.ar/pinza-amperimetrica-digital-uni-t-ut202-400a/p/MLA15532841?pdp_filters=category:MLA30763#searchVariation=MLA15532841&position=1&search_layout=stack&type=product&tracking_id=bf5037ae-9a6a-4c48-a479-6a1f6ec8f119) de Uni-T, simple y portatil. La uso principalmente para mediciones de temperatura y de corriente alterna, para eso me funciona muy bien.
  
- Multímetro [HT118A](https://articulo.mercadolibre.com.ar/MLA-1100119405-multimetro-digital-6000-cuentas-t-rms-autorango-oferta-_JM) de Kaiweets o Habotest. Es el mejor multímetro en términos de precio-calidad. Excelente construcción, peso y precisión.
  
## Osciloscopio
- [Hantek 6022BE](https://articulo.mercadolibre.com.ar/MLA-755874988-osciloscopio-ppc-hantek-6022be-2-canal-20mhz-autom-emakers-_JM#position=8&search_layout=stack&type=item&tracking_id=15f78b4b-03e4-49e5-84b4-3685d4dc2f04), un osciloscopio USB de 2 canáles y 20MHz. Es poco para un electrónico profesional pero para hobbyista y para viajes profesionales es excelentísimo. Combinar con el software OpenHantek6022, sí o sí.

## Fuente de laboratorio
- [Yihua 30V 5A](https://articulo.mercadolibre.com.ar/MLA-808644908-fuente-de-laboratorio-regulable-yihua-30v-5a-lcd-digital-_JM). Muy alto amperaje pero poca precisión. Para el precio está bien pero creo que una Uni-T podría haber estado mejor. Se puede regular el zero y el gain con unos potenciomentros que tiene dentro de la carcaza para mejorar su precisión. Para las cosas que hago yo sirve y sobra.


- Fuente de PC convertida. Las fuentes de PC tienen salidas a +12V, -12V, 5V y 3,3V. Poseen alta capacidad de corriente, las uso cuando necesito correr motores a potencias que no puede proveer la fuente de laboratorio.

## Soldadora
- Estacion de soldado [Gadnic 996D](https://articulo.mercadolibre.com.ar/MLA-908545940-estacion-soldado-smd-aire-caliente-3-en-1-profesional-gadnic-_JM). Soldadora 2 en 1 con cautín para estaño y con pistola de aire caliente. Estoy un 99% seguro que es un producto white label y Gadnic son quienes lo importan. La he usado poco pero por ahora me ha resultado muy útil.

## Microcontroladores
- ESP32 y ESP8266. Los mejores chips que he usado, el ESP8266 para dispositivos simples y el ESP32 para cualquier otra cosa. El ESP32 tiene todas las interfáces y protocolos que puedas llegar a necesitar, además de una cantidad importante de pines, Bluetooth, WiFi y RTC integrado. Como si no fuera suficiente, también tiene 2 cores para poder separar el procesamiento de las interfaces inalámbricas de la lógica que controla sensores, actuadores, etc. Se pueden programar con Arduino pero recomiendo usar PlatformIO y aprovechar el SDK de Espressif que usa FreeRTOS.

<br />

# Software

## Arch Linux
Combinado con BSPWM lleva a una experiencia personalizada y configurada específicamente para mis necesidades. Free Open Source Software (FOSS).

## Rosé Pine Wood Theme
Combinado con prácticamente cualquier software que utilizo, de todas las paletas de colores que he usado es mi preferida por un márgen enorme.

## Visual Studio Code
Mi editor de texto por preferencia. A diferencia de otros IDE's que se usan para programación embebida VSCode es tan simple o tan complejo como vos quieras que sea. FOSS pero de Microsoft.

## KiCAD
Excelentísimo software para diseño de esquemáticos y de PCBs, al menos al nivel en el que lo uso yo. FOSS.

## Firefox & Thunderbird
Cumplen el trabajo de Web y Mail client respectivamente muy bien y son suficientemente personalizables. FOSS.

## Bitwarden
Password Manager de preferencia corriendo en mi propio servidor. Cumple con lo que se necesita. FOSS.

## Nextcloud
Herramienta de organización, servidor de archivos, calendario, tareas, etc. Hace de todo. Corriendo también en mi propio servidor. FOSS.

## FreeCAD
No hago diseño 3D, por ahora solo lo he usado para visualizar diseños ajenos y para eso sirve más que bien. FOSS.

## Flutter
Framework favorito para desarrollo de GUIs. Recomendadísimo para escapar a Javascript y seguir construyendo aplicaciones multi-plataforma. FOSS pero de Google.

## ChibiOS
Real Time Operating System embebido favorito por el momento. Es el que más he usado pero la simplicidad de su RTOS combinada con las capas de abstracción de hardware lo hacen un framework magnífico para el desarrollo de aplicaciones embebidas, específicamente en microcontroladores STM32. FOSS.