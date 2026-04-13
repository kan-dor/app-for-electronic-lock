import tkinter as tk
from PIL import Image, ImageTk



class Main (tk.Frame):
    def __init__(self, root):
        super().__init__(root)
        self.create_canvas()
        self.show_bg()
        self.button_reg()

        
    def create_canvas(self):
        self.canvas = tk.Canvas(root, width=1200, height=700)
        self.canvas.pack()

    def show_bg(self):
        img_bg = Image.open("images/reg_bg.png")
        imag_bg = img_bg.resize((1200, 700), Image.Resampling.LANCZOS)
        self.bg_image = ImageTk.PhotoImage(imag_bg)

        img = Image.open("images/transper.png")
        imag = img.resize((445, 367), Image.Resampling.LANCZOS)
        self.transper_image = ImageTk.PhotoImage(imag)
        
        self.canvas.create_image(0, 0, image=self.bg_image, anchor="nw")
        self.canvas.create_image(600, 350, image=self.transper_image, anchor="center")

    def button_reg(self):
        img_reg = Image.open("images/button.png")
        self.img_reg = ImageTk.PhotoImage(img_reg)

        self.button_reg_widget = tk.Button(
            self.canvas,
            image=self.img_reg,
            text='Регистрация',
            compound='center',
            font='Sensation 20 bold',
            bd=0,
            height=73,
            relief=tk.FLAT,
            highlightthickness=0,
        )

        self.canvas.create_window(600, 472, window=self.button_reg_widget, anchor="center")

    def create_image_button(self):
        import tkinter as tk

    def create_rounded_button(self, x=50, y=50):
        """
        Создаёт кнопку с закруглёнными углами на self.canvas.
        Параметры:
        - x, y: координаты центра кнопки
        """
        width = 371
        height = 73
        radius = 20  # радиус скругления углов
        color = "#EFF9FF"
        text = "регистрация"

        # Координаты для прямоугольника с закруглениями
        x1 = x - width // 2
        y1 = y - height // 2
        x2 = x + width // 2
        y2 = y + height // 2

        # Создаём основной прямоугольник с закруглёнными углами
        self.canvas.create_rounded_rect(
            x1, y1, x2, y2,
            radius=radius,
            fill=color,
            outline=color,
            tags="rounded_button"
        )

        # Добавляем текст по центру
        self.canvas.create_text(
            x, y,
            text=text,
            font=("Arial", 14, "bold"),
            fill="#333333",
            tags="button_text"
        )

        # Привязываем обработчик клика
        self.canvas.tag_bind("rounded_button", "<Button-1>", self.on_button_click)
        self.canvas.tag_bind("button_text", "<Button-1>", self.on_button_click)

    # Вспомогательная функция для рисования прямоугольника с закруглёнными углами
    def create_rounded_rect(self, x1, y1, x2, y2, radius=25, **kwargs):
        points = [
            x1 + radius, y1,
            x2 - radius, y1,
            x2, y1,
            x2, y1 + radius,
            x2, y2 - radius,
            x2, y2,
            x2 - radius, y2,
            x1 + radius, y2,
            x1, y2,
            x1, y2 - radius,
            x1, y1 + radius,
            x1, y1
        ]
        return self.canvas.create_polygon(points, smooth=True, **kwargs)

    # Обработчик клика по кнопке
    def on_button_click(self, event):
        print("Кнопка 'регистрация' нажата!")
        # Здесь можно добавить свою логику при нажатии




if __name__ == "__main__":
    
    root = tk.Tk()
    app = Main(root)
    app.pack()
    root.title("Управление элементами СКУД")
    root.geometry("1200x700+100+0")
    root.resizable(False, False)
    root.mainloop()
