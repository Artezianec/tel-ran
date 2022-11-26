package telran.socket.server.controller;

import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import telran.socket.server.tasks.ClientTask;

public class ServerSocketAppl {

	public static void main(String[] args) throws InterruptedException {
		int port = 9000;
		ExecutorService executorService = Executors.newFixedThreadPool(3);
		try (ServerSocket serverSocket = new ServerSocket(port);) {
			while (true) {
				System.out.println("Server wait...");
				Socket socket = serverSocket.accept();
				System.out.println("Connection established");
				System.out.println("Client host: " + socket.getInetAddress() + ":" + socket.getPort());
				ClientTask task = new ClientTask(socket);
				executorService.execute(task);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			executorService.shutdown();
			executorService.awaitTermination(1, TimeUnit.MINUTES);
		}

	}

}
