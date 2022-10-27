Concept ของการสร้าง application มีอะไรบ้าง ก่อนจะสร้าง application ขึ้นมาควรเริ่มจากอะไร มีหลักการยังไงบ้าง ให้อธิบายอย่างละเอียด เป็นลำดับขั้นตอน เช่น Coding --> feature --> xxx --> xxx โดยแต่ละขั้นตอนมีอธิบายอย่างละเอียด


Design --> Coding --> Feature --> Deploy -->CI/CD -->Health Check (loop)

Conceptของการสร้างApplicationตัวนึง น่าจะต้องประกอบไปด้วย การออกแบบinterface ออกแบบFeatureต่างๆ  หลังจากนั้นก็ค่อยCoding ซึ่งก็คือการเขียนโปรแกรมเพื่อที่จะสร้างตัวAppilcationขึ้นมาCoding และFeatureเสร็จ ก็จะถึงขั้นตอนการDeployขึ้นServer เราก็ต้องมาทำความรู้จักกับ
CI/CDเพื่อที่จะทำให้มันเป็นAutomation และหลังจากนั้นบางทีมันก็อาจจะมีErrorมีข้อผิดพลาดในระหว่างการขนส่ง ดังนั้นเราควรมีprocessนึงที่มาจัดการเรื่องนี้ นั่นก็คือHealth Check พอพูดถึงตรวจสอบก็จะต้องพูดถึOrchestrationซึ่งมีหน้าที่เอาไว้ควบคุมการขนส่งของcontainer 