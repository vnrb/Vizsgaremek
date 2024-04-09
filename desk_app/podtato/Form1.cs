using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using MySql.Data.MySqlClient;

namespace podtato
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void FejlecJatekos(string[] oszlopnev)
        {
            dataGridView1.Columns.Clear();

            for (int i = 0; i < oszlopnev.Length; i++)
            {
                DataGridViewTextBoxColumn fejlecJ = new DataGridViewTextBoxColumn();
                fejlecJ.HeaderText = oszlopnev[i];
                dataGridView1.Columns.Add(fejlecJ);

                if (fejlecJ.ValueType == typeof(string))
                {
                    fejlecJ.DefaultCellStyle.WrapMode = DataGridViewTriState.False;
                    fejlecJ.DefaultCellStyle.Format = "";
                }
            }
        }

        private void FejlecLiga(string[] oszlopnev)
        {
            dataGridView2.Columns.Clear();

            for (int i = 0; i < oszlopnev.Length; i++)
            {
                DataGridViewTextBoxColumn fejlecL = new DataGridViewTextBoxColumn();
                fejlecL.HeaderText = oszlopnev[i];
                dataGridView2.Columns.Add(fejlecL);

                if (fejlecL.ValueType == typeof(string))
                {
                    fejlecL.DefaultCellStyle.WrapMode = DataGridViewTriState.False;
                    fejlecL.DefaultCellStyle.Format = "";
                }
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog1 = new OpenFileDialog();

            openFileDialog1.InitialDirectory = "c:\\";
            openFileDialog1.Filter = "Text files (*.txt)|*.txt|All files (*.*)|*.*";
            openFileDialog1.FilterIndex = 2;
            openFileDialog1.RestoreDirectory = true;

            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                try
                {
                    string filePath = openFileDialog1.FileName;
                    using (StreamReader sr = new StreamReader(filePath))
                    {
                        dataGridView1.Rows.Clear();

                        string sor;
                        if ((sor = sr.ReadLine()) != null)
                        {
                            string[] oszlnev = sor.Split(',');
                            FejlecJatekos(oszlnev);
                        }

                        while ((sor = sr.ReadLine()) != null)
                        {
                            string[] darab = sor.Split(',');

                            for (int i = 0; i < darab.Length; i++)
                            {
                                if (darab[i].Contains("\""))
                                    darab[i] = darab[i].Replace("\"", "");
                            }

                            dataGridView1.Rows.Add(darab);
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Hiba történt a fájl beolvasása közben: " + ex.Message);
                }
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string connectionString = "server=localhost;port=3306;username=root;password=;database=hotpodtato";
            string torles = "DELETE FROM players";

            try
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    using (MySqlCommand command = new MySqlCommand(torles, connection))
                    {
                        command.ExecuteNonQuery();
                    }

                    foreach (DataGridViewRow row in dataGridView1.Rows)
                    {
                        if (!row.IsNewRow)
                        {
                            string beszuras = "INSERT INTO players (leaguetype, playername, team, position, exp, status, injtype, recoverytime, gamesplayed, pyards, ptds, pint, rushyards, rushtds, rec, recyards, rectds, sck, recints, ffumbles, freturn, ppg, totalpoint) VALUES (@leaguetype, @playername, @team, @position, @exp, @status, @injtype, @recoverytime, @gamesplayed, @pyards, @ptds, @pint, @rushyards, @rushtds, @rec, @recyards, @rectds, @sck, @recints, @ffumbles, @freturn, @ppg, @totalpoint)";


                            using (MySqlCommand insertCommand = new MySqlCommand(beszuras, connection))
                            {
                                insertCommand.Parameters.AddWithValue("leaguetype", row.Cells[0].Value);
                                insertCommand.Parameters.AddWithValue("playername", row.Cells[1].Value);
                                insertCommand.Parameters.AddWithValue("team", row.Cells[2].Value);
                                insertCommand.Parameters.AddWithValue("position", row.Cells[3].Value);
                                insertCommand.Parameters.AddWithValue("exp", row.Cells[4].Value);
                                insertCommand.Parameters.AddWithValue("status", row.Cells[5].Value);
                                insertCommand.Parameters.AddWithValue("injtype", row.Cells[6].Value);
                                insertCommand.Parameters.AddWithValue("recoverytime", row.Cells[7].Value);
                                insertCommand.Parameters.AddWithValue("gamesplayed", row.Cells[8].Value);
                                insertCommand.Parameters.AddWithValue("pyards", row.Cells[9].Value);
                                insertCommand.Parameters.AddWithValue("ptds", row.Cells[10].Value);
                                insertCommand.Parameters.AddWithValue("pint", row.Cells[11].Value);
                                insertCommand.Parameters.AddWithValue("rushyards", row.Cells[12].Value);
                                insertCommand.Parameters.AddWithValue("rushtds", row.Cells[13].Value);
                                insertCommand.Parameters.AddWithValue("rec", row.Cells[14].Value);
                                insertCommand.Parameters.AddWithValue("recyards", row.Cells[15].Value);
                                insertCommand.Parameters.AddWithValue("rectds", row.Cells[16].Value);
                                insertCommand.Parameters.AddWithValue("sck", row.Cells[17].Value);
                                insertCommand.Parameters.AddWithValue("recints", row.Cells[18].Value);
                                insertCommand.Parameters.AddWithValue("ffumbles", row.Cells[19].Value);
                                insertCommand.Parameters.AddWithValue("freturn", row.Cells[20].Value);
                                insertCommand.Parameters.AddWithValue("ppg", row.Cells[21].Value);
                                insertCommand.Parameters.AddWithValue("totalpoint", row.Cells[22].Value);

                                insertCommand.ExecuteNonQuery();
                            }
                        }
                    }

                    MessageBox.Show("Az adatok sikeresen frissültek.");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba történt az adatok frissítése közben: " + ex.Message);
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog2 = new OpenFileDialog();

            openFileDialog2.InitialDirectory = "c:\\";
            openFileDialog2.Filter = "Text files (*.txt)|*.txt|All files (*.*)|*.*";
            openFileDialog2.FilterIndex = 2;
            openFileDialog2.RestoreDirectory = true;

            if (openFileDialog2.ShowDialog() == DialogResult.OK)
            {
                try
                {
                    string filePath = openFileDialog2.FileName;
                    using (StreamReader sr = new StreamReader(filePath))
                    {
                        dataGridView2.Rows.Clear();

                        string sor;
                        if ((sor = sr.ReadLine()) != null)
                        {
                            string[] oszlnev = sor.Split(',');
                            FejlecLiga(oszlnev);
                        }

                        while ((sor = sr.ReadLine()) != null)
                        {
                            string[] darab = sor.Split(',');

                            for (int i = 0; i < darab.Length; i++)
                            {
                                if (darab[i].Contains("\""))
                                    darab[i] = darab[i].Replace("\"", "");
                            }

                            dataGridView2.Rows.Add(darab);
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Hiba történt a fájl beolvasása közben: " + ex.Message);
                }
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            string connectionString = "server=localhost;port=3306;username=root;password=;database=hotpodtato";
            string torles = "DELETE FROM leagues";

            try
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    using (MySqlCommand command = new MySqlCommand(torles, connection))
                    {
                        command.ExecuteNonQuery();
                    }

                    foreach (DataGridViewRow row in dataGridView2.Rows)
                    {
                        if (!row.IsNewRow)
                        {
                            string beszuras = "INSERT INTO leagues (leaguename, leaguetype, numberofplayers, members, gamesplayed, balance, s_r_points) VALUES (@leaguename, @leaguetype, @numberofplayers, @members, @gamesplayed, @balance, @s_r_points)";


                            using (MySqlCommand insertCommand = new MySqlCommand(beszuras, connection))
                            {
                                insertCommand.Parameters.AddWithValue("leaguename", row.Cells[0].Value);
                                insertCommand.Parameters.AddWithValue("leaguetype", row.Cells[1].Value);
                                insertCommand.Parameters.AddWithValue("numberofplayers", row.Cells[2].Value);
                                insertCommand.Parameters.AddWithValue("members", row.Cells[3].Value);
                                insertCommand.Parameters.AddWithValue("gamesplayed", row.Cells[4].Value);
                                insertCommand.Parameters.AddWithValue("balance", row.Cells[5].Value);
                                insertCommand.Parameters.AddWithValue("s_r_points", row.Cells[6].Value);

                                insertCommand.ExecuteNonQuery();
                            }
                        }
                    }

                    MessageBox.Show("Az adatok sikeresen frissültek.");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba történt az adatok frissítése közben: " + ex.Message);
            }
        }
    }
}
