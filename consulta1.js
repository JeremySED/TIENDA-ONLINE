import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class ConsultaPago extends JFrame {

    private JTextField txtSueldo;
    private JComboBox<String> cboCategoria;
    private JTextArea txtResultado;

    public ConsultaPago() {
        setTitle("Consulta de Pago");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 350);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        // Panel principal con un degradado (simulando la decoración)
        JPanel panel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                Graphics2D g2d = (Graphics2D) g;
                Color color1 = new Color(44, 83, 100);
                Color color2 = new Color(32, 58, 67);
                Color color3 = new Color(15, 32, 39);
                GradientPaint gp = new GradientPaint(0, 0, color1, getWidth(), getHeight(), color3);
                g2d.setPaint(gp);
                g2d.fillRect(0, 0, getWidth(), getHeight());
            }
        };
        panel.setLayout(new GridBagLayout());
        panel.setBorder(BorderFactory.createEmptyBorder(20,20,20,20));
        add(panel, BorderLayout.CENTER);

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(8,8,8,8);
        gbc.fill = GridBagConstraints.HORIZONTAL;

        JLabel lblTitulo = new JLabel("Consulta de Pago");
        lblTitulo.setFont(new Font("Arial", Font.BOLD, 20));
        lblTitulo.setForeground(Color.WHITE);
        gbc.gridx = 0; gbc.gridy = 0; gbc.gridwidth = 2;
        panel.add(lblTitulo, gbc);

        JLabel lblSueldo = new JLabel("Sueldo Base:");
        lblSueldo.setForeground(Color.WHITE);
        gbc.gridy = 1; gbc.gridwidth = 1;
        panel.add(lblSueldo, gbc);

        txtSueldo = new JTextField();
        gbc.gridx = 1;
        panel.add(txtSueldo, gbc);

        JLabel lblCategoria = new JLabel("Categoría:");
        lblCategoria.setForeground(Color.WHITE);
        gbc.gridx = 0; gbc.gridy = 2;
        panel.add(lblCategoria, gbc);

        cboCategoria = new JComboBox<>(new String[]{
            "--Selecciona--",
            "Categoría 1 (30% aumento)",
            "Categoría 2 (20% aumento)",
            "Categoría 3 (15% aumento)",
            "Sin aumento"
        });
        gbc.gridx = 1;
        panel.add(cboCategoria, gbc);

        JButton btnCalcular = new JButton("Calcular");
        gbc.gridx = 0; gbc.gridy = 3; gbc.gridwidth = 2;
        panel.add(btnCalcular, gbc);

        txtResultado = new JTextArea(5,30);
        txtResultado.setEditable(false);
        txtResultado.setLineWrap(true);
        txtResultado.setWrapStyleWord(true);
        txtResultado.setBackground(new Color(0,0,0,80));
        txtResultado.setForeground(Color.WHITE);
        txtResultado.setFont(new Font("Monospaced", Font.BOLD, 14));
        JScrollPane scroll = new JScrollPane(txtResultado);
        gbc.gridy = 4;
        panel.add(scroll, gbc);

        btnCalcular.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                calcularSueldo();
            }
        });
    }

    private void calcularSueldo() {
        try {
            double sueldo = Double.parseDouble(txtSueldo.getText());
            int categoria = cboCategoria.getSelectedIndex();
            double nuevoSueldo = sueldo;

            switch (categoria) {
                case 1: nuevoSueldo = sueldo * 1.30; break;
                case 2: nuevoSueldo = sueldo * 1.20; break;
                case 3: nuevoSueldo = sueldo * 1.15; break;
                default: break; // sin aumento o no seleccionó
            }

            txtResultado.setText(
                "El sueldo base es: $" + String.format("%.2f", sueldo) + "\n" +
                "La categoría es: " + (categoria==0? "No seleccionada" : categoria) + "\n" +
                "-------------------------------\n" +
                "Nuevo Sueldo: $" + String.format("%.2f", nuevoSueldo)
            );
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this,
                "Ingresa un sueldo válido",
                "Error",
                JOptionPane.ERROR_MESSAGE);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new ConsultaPago().setVisible(true);
        });
    }
}
