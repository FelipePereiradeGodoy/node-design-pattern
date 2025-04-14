# 📐 Design Patterns em Programação

Este repositório tem como objetivo documentar os principais **Design Patterns** (Padrões de Projeto) da programação e fornecer exemplos simples de implementação para cada um deles.

---

## 🔨 Padrões Criacionais

> Focados em como objetos são criados e gerenciados.

| Padrão             | Problema que resolve |
|--------------------|----------------------|
| **Singleton**      | Garante que uma classe tenha **apenas uma instância** e fornece um ponto global de acesso a ela. |
| **Factory Method** | Permite que subclasses decidam **qual objeto instanciar**, delegando a criação para subclasses. |
| **Abstract Factory** | Fornece uma interface para criar **famílias de objetos relacionados**, sem depender de suas classes concretas. |
| **Builder**        | Separa a construção de um objeto complexo da sua representação, permitindo **construções passo a passo**. |
| **Prototype**      | Permite copiar objetos existentes (clonar), ideal quando a **criação do objeto é custosa** ou complexa. |

---

## 🧱 Padrões Estruturais

> Focados em como classes e objetos se compõem para formar estruturas maiores.

| Padrão         | Problema que resolve |
|----------------|----------------------|
| **Adapter**    | Permite que duas interfaces **incompatíveis colaborem**, convertendo uma interface em outra esperada. |
| **Decorator**  | Adiciona **responsabilidades a um objeto dinamicamente**, como alternativa flexível à herança. |
| **Facade**     | Fornece uma **interface simplificada** para um conjunto de subsistemas complexos. |
| **Composite**  | Permite tratar **objetos individuais e composições de objetos** de forma uniforme (árvores). |
| **Proxy**      | Fornece um substituto ou representante de outro objeto para **controlar o acesso** a ele. |
| **Bridge**     | Separa uma abstração de sua implementação, permitindo **variação independente** das duas. |
| **Flyweight**  | Reduz o uso de memória compartilhando o máximo possível de dados com objetos semelhantes. Ideal para **muitos objetos parecidos**. |

---

## 🧠 Padrões Comportamentais

> Focados na **comunicação entre objetos** e no fluxo de controle.

| Padrão               | Problema que resolve |
|----------------------|----------------------|
| **Observer**         | Permite que múltiplos objetos sejam **notificados automaticamente** quando o estado de outro objeto mudar. |
| **Strategy**         | Permite definir uma família de algoritmos, encapsulá-los e torná-los **intercambiáveis** em tempo de execução. |
| **Command**          | Encapsula uma solicitação como um objeto, permitindo **parametrizar ações**, enfileirar ou desfazer operações. |
| **State**            | Permite que um objeto **mude seu comportamento** quando seu estado interno muda. |
| **Template Method**  | Define o **esqueleto de um algoritmo** na superclasse, permitindo que subclasses alterem partes específicas. |
| **Mediator**         | Reduz o acoplamento entre objetos, fazendo com que se comuniquem por meio de um **objeto central** (mediador). |
| **Memento**          | Permite capturar e armazenar o estado interno de um objeto sem violar o encapsulamento, para que possa ser restaurado posteriormente. |
| **Chain of Responsibility** | Permite passar uma solicitação por uma **cadeia de manipuladores**, onde cada um pode tratar ou passar adiante. |
| **Iterator**         | Fornece um meio de **acessar os elementos** de um objeto agregado sequencialmente, sem expor sua estrutura. |
| **Visitor**          | Permite **adicionar novas operações** a objetos sem alterar suas classes. Ideal para estruturas de dados complexas. |

---

## 🛠️ Design

📁 Cada padrão terá sua própria pasta com:
- Um exemplo simples de implementação;

---
